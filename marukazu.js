/* marukazu.js - Health Facility Dropdown Library */
(function(global) {
  const facilities = [
    "Sh. Funadhoo SHAH","HDh. Kulhudhuffushi KRH","GMR IGMH","GMR ADK","GMR HMH","GMR TTH",
    "GMR VMH","GMR Dhamanaveshi","GMR Other","Other Abroad","Other Unknown",
    "Sh. Kanditheemu HC","Sh. Noomaraa HC","Sh. Goidhoo HC","Sh. Feydhoo HC","Sh. Feevah HC",
    "Sh. Bilehfahi HC","Sh. Foakaidhoo HC","Sh. Narudhoo HC","Sh. Maroshi HC","Sh. Lhaimagu HC",
    "Sh. Komandoo HC","Sh. Maaungoodhoo HC","Sh. Milandhoo HC","HA. Baarah HC","HA. Dhiddhoo HAAH",
    "HA. Filladhoo HC","HA. Hoarafushi HC","HA. Ihavandhoo HC","HA. Kelaa HC","HA. Maarandhoo HC",
    "HA. Mulhadhoo HC","HA. Muraidhoo HC","HA. Thakandhoo HC","HA. Thuraakunu HC","HA. Uligamu HC",
    "HA. Utheemu HC","HA. Vashafaru HC","HDh. Hanimaadhoo HC","HDh. Finey HC","HDh. Naivaadhoo HC",
    "HDh. Nolhivaranfaru HC","HDh. Nellaidhoo HC","HDh. Nolhivaram HC","HDh. Kurinbi HC",
    "HDh. Kumundhoo HC","HDh. Neykurendhoo HC","HDh. Vaikaradhoo HC","HDh. Makunudhoo HC",
    "HDh. Hirimaradhoo HC","N. Foddhoo HC","N. Henbandhoo HC","N. Holhudhoo HC",
    "N. Kendhikulhudhoo HC","N. Kudafari HC","N. Landhoo HC","N. Lhohi HC","N. Maafaru HC",
    "N. Maalhendhoo HC","N. Magoodhoo HC","N. Manadhoo NAH","N. Miladhoo HC","N. Velidhoo HC",
    "R. Alifushi HC","R. Angolhitheemu HC","R. Fainu HC","R. Hulhudhuffaaru HC","R. Inguraidhoo HC",
    "R. Innamaadhoo HC","R. Dhuvaafaru HC","R. Kinolhas HC","R. Maakurathu HC","R. Maduvvaree HC",
    "R. Meedhoo HC","R. Rasgetheemu HC","R. Rasmaadhoo HC","R. Ungoofaaru URH","R. Vaadhoo HC",
    "B. Dharavandhoo HC","B. Dhonfanu HC","B. Eydhafushi BAH","B. Fehendhoo HC","B. Fulhadhoo HC",
    "B. Goidhoo HC","B. Hithaadhoo HC","B. Kamadhoo HC","B. Kendhoo HC","B. Kihaadhoo HC",
    "B. Kudarikilu HC","B. Maalhos HC","B. Thulhaadhoo HC","Lh. Hinnavaru HC","Lh. Kurendhoo HC",
    "Lh. Naifaru LHAH","Lh. Olhuvelifushi HC","Lh. Maafilaafushi HC","K. Dhiffushi HC",
    "K. Gaafaru HC","K. Gulhi HC","K. Guraidhoo HC","K. Himmafushi HC","K. Huraa HC","K. Kaashidhoo HC",
    "K. Maafushi HC","K. Thulusdhoo HC","AA. Bodufolhudhoo HC","AA. Feridhoo HC","AA. Himandhoo HC",
    "AA. Maalhos HC","AA. Mathiveri HC","AA. Rasdhoo AAAH","AA. Thoddoo HC","AA. Ukulhas HC",
    "AA. Fesdhoo HC","ADh. Dhangethi HC","ADh. Dhiddhoo HC","ADh. Dhigurah HC","ADh. Fenfushi HC",
    "ADh. Haggnaameedhoo HC","ADh. Kunburudhoo HC","ADh. Maamingili HC","ADh. Mahibadhoo ADHAH",
    "ADh. Mandhoo HC","ADh. Omadhoo HC","V. Felidhoo VAH","V. Fulidhoo HC","V. Keyodhoo HC",
    "V. Rakeedhoo HC","V. Thinadhoo HC","M. Mulak HC","M. Dhiggaru HC","M. Kolhufushi HC",
    "M. Maduvvaree HC","M. Muli MRH","M. Naalaafushi HC","M. Raimmandhoo HC","M. Veyvah HC",
    "F. Bileddhoo HC","F. Dharanboodhoo HC","F. Feeali HC","F. Magoodhoo HC","F. Nilandhoo AH",
    "Dh. Bandidhoo HC","Dh. Gemendhoo HC","Dh. Hulhudheli HC","Dh. Kudahuvadhoo DHAH",
    "Dh. Maaenboodhoo HC","Dh. Meedhoo HC","Dh. Rinbudhoo HC","Dh. Vaanee HC","Th. Burunee HC",
    "Th. Vilufushi HC","Th. Madifushi HC","Th. Dhiyamingili HC","Th. Guraidhoo HC","Th. Gaadhiffushi HC",
    "Th. Thimarafushi HC","Th. Veymandoo THAH","Th. Kinbidhoo HC","Th. Omadhoo HC","Th. Hirilandhoo HC",
    "Th. Kandoodhoo HC","Th. Vandhoo HC","L. Dhanbidhoo HC","L. Fonadhoo HC","L. Gan GRH",
    "L. Hithadhoo HC","L. Isdhoo HC","L. Kunahandhoo HC","L. Maabaidhoo HC","L. Maamendhoo HC",
    "L. Maavah HC","L. Mundoo HC","GA. Dhaandhoo HC","GA. Dhevvadhoo HC","GA. Gemanafushi HC",
    "GA. Kanduhulhudhoo HC","GA. Kolamaafushi HC","GA. Kondey HC","GA. Maamendhoo HC","GA. Nilandhoo HC",
    "GA. Villingili GAAH","GDh. Fares-Maathodaa HC","GDh. Fiyoaree HC","GDh. Gaddhoo HC",
    "GDh. Hoandeddhoo HC","GDh. Madaveli HC","GDh. Nadellaa HC","GDh. Rathafandhoo HC",
    "GDh. Thinadhoo ASMH","GDh. Vaadhoo HC","Gn. Fuvahmulah HC","S .Hithadhoo AEH","S. Maradhoo HC",
    "S. Maradhoo-Feydhoo HC","S. Feydhoo HC","S. Hulhumeedhoo HC"
  ];

  // auto-populate select.marukazu
  function populate() {
    const selects = document.querySelectorAll('select.marukazu');
    selects.forEach(select => {
      select.innerHTML = '';

      const placeholder = document.createElement('option');
      placeholder.value = '';
      placeholder.textContent = 'Select Facility';
      select.appendChild(placeholder);

      facilities.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        select.appendChild(option);
      });
    });
  }

  document.addEventListener('DOMContentLoaded', populate);

  global.marukazu = { facilities, populate };

})(window);
