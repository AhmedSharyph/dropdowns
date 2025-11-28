/* rahthah.js - Island Dropdown Library */
(function(global) {
  const islands = [
    "Sh. Funadhoo","Sh. Kanditheemu","Sh. Noomaraa","Sh. Goidhoo","Sh. Feydhoo","Sh. Feevah",
    "Sh. Bilehfahi","Sh. Foakaidhoo","Sh. Narudhoo","Sh. Maroshi","Sh. Lhaimagu","Sh. Komandoo",
    "Sh. Maaungoodhoo","Sh. Milandhoo","HA. Baarah","HA. Dhiddhoo","HA. Filladhoo","HA. Hoarafushi",
    "HA. Ihavandhoo","HA. Kelaa","HA. Maarandhoo","HA. Mulhadhoo","HA. Muraidhoo","HA. Thakandhoo",
    "HA. Thuraakunu","HA. Uligamu","HA. Utheemu","HA. Vashafaru","HDh. Hanimaadhoo","HDh. Finey",
    "HDh. Naivaadhoo","HDh. Nolhivaranfaru","HDh. Nellaidhoo","HDh. Nolhivaram","HDh. Kurinbi",
    "HDh. Kulhudhuffushi City","HDh. Kumundhoo","HDh. Neykurendhoo","HDh. Vaikaradhoo","HDh. Makunudhoo",
    "HDh. Hirimaradhoo","N. Foddhoo","N. Henbandhoo","N. Holhudhoo","N. Kendhikulhudhoo","N. Kudafari",
    "N. Landhoo","N. Lhohi","N. Maafaru","N. Maalhendhoo","N. Magoodhoo","N. Manadhoo","N. Miladhoo",
    "N. Velidhoo","R. Alifushi","R. Angolhitheemu","R. Fainu","R. Hulhudhuffaaru","R. Inguraidhoo",
    "R. Innamaadhoo","R. Dhuvaafaru","R. Kinolhas","R. Maakurathu","R. Maduvvaree","R. Meedhoo",
    "R. Rasgetheemu","R. Rasmaadhoo","R. Ungoofaaru","R. Vaadhoo","B. Dharavandhoo","B. Dhonfanu",
    "B. Eydhafushi","B. Fehendhoo","B. Fulhadhoo","B. Goidhoo","B. Hithaadhoo","B. Kamadhoo","B. Kendhoo",
    "B. Kihaadhoo","B. Kudarikilu","B. Maalhos","B. Thulhaadhoo","Lh. Hinnavaru","Lh. Kurendhoo",
    "Lh. Naifaru","Lh. Olhuvelifushi","Lh. Maafilaafushi","K. Dhiffushi","K. Gaafaru","K. Gulhi",
    "K. Guraidhoo","K. Himmafushi","K. Hulhumalé","K. Huraa","K. Kaashidhoo","K. Maafushi","K. Thulusdhoo",
    "AA. Bodufolhudhoo","AA. Feridhoo","AA. Himandhoo","AA. Maalhos","AA. Mathiveri","AA. Rasdhoo",
    "AA. Thoddoo","AA. Ukulhas","AA. Fesdhoo","ADh. Dhangethi","ADh. Dhiddhoo","ADh. Dhigurah",
    "ADh. Fenfushi","ADh. Haggnaameedhoo","ADh. Kunburudhoo","ADh. Maamingili","ADh. Mahibadhoo",
    "ADh. Mandhoo","ADh. Omadhoo","V. Felidhoo","V. Fulidhoo","V. Keyodhoo","V. Rakeedhoo","V. Thinadhoo",
    "M. Mulak","M. Dhiggaru","M. Kolhufushi","M. Maduvvaree","M. Muli","M. Naalaafushi","M. Raimmandhoo",
    "M. Veyvah","F. Bileddhoo","F. Dharanboodhoo","F. Feeali","F. Magoodhoo","F. Nilandhoo","Dh. Bandidhoo",
    "Dh. Gemendhoo","Dh. Hulhudheli","Dh. Kudahuvadhoo","Dh. Maaenboodhoo","Dh. Meedhoo","Dh. Rinbudhoo",
    "Dh. Vaanee","Th. Burunee","Th. Vilufushi","Th. Madifushi","Th. Dhiyamingili","Th. Guraidhoo",
    "Th. Gaadhiffushi","Th. Thimarafushi","Th. Veymandoo","Th. Kinbidhoo","Th. Omadhoo","Th. Hirilandhoo",
    "Th. Kandoodhoo","Th. Vandhoo","L. Dhanbidhoo","L. Fonadhoo","L. Gan","L. Hithadhoo","L. Isdhoo",
    "L. Kunahandhoo","L. Maabaidhoo","L. Maamendhoo","L. Maavah","L. Mundoo","GA. Dhaandhoo","GA. Dhevvadhoo",
    "GA. Gemanafushi","GA. Kanduhulhudhoo","GA. Kolamaafushi","GA. Kondey","GA. Maamendhoo","GA. Nilandhoo",
    "GA. Villingili","GDh. Fares-Maathodaa","GDh. Fiyoaree","GDh. Gaddhoo","GDh. Hoandeddhoo","GDh. Madaveli",
    "GDh. Nadellaa","GDh. Rathafandhoo","GDh. Thinadhoo","GDh. Vaadhoo","Gn. Fuvahmulah","S. Hithadhoo",
    "S. Maradhoo","S. Maradhoo-Feydhoo","S. Feydhoo","S. Hulhumeedhoo","GMR. Vilimalé","GMR. Malé","GMR. Hulhumalé"
  ];

  // Auto-populate all <select> with class "rahthah"
  function populate() {
    const selects = document.querySelectorAll('select.rahthah');
    selects.forEach(select => {
      select.innerHTML = '';
      const placeholder = document.createElement('option');
      placeholder.value = '';
      placeholder.textContent = 'Select Island';
      select.appendChild(placeholder);

      islands.forEach(island => {
        const option = document.createElement('option');
        option.value = island;
        option.textContent = island;
        select.appendChild(option);
      });
    });
  }

  // Auto-run on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', populate);

  // Expose to global namespace
  global.rahthah = {
    islands,
    populate
  };
})(window);
