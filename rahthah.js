/* rahthah.js - Select2-like Island Dropdown Library (Vanilla JS) */
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

  function createDropdown(select) {
    // Hide original select
    select.style.display = 'none';
    select.tabIndex = -1;

    // Container
    const container = document.createElement('div');
    container.classList.add('rahthah-dropdown');
    container.style.position = 'relative';
    select.parentNode.insertBefore(container, select);
    container.appendChild(select);

    // Selected box
    const selected = document.createElement('div');
    selected.classList.add('rahthah-selected');
    selected.textContent = 'Select Island';
    selected.tabIndex = 0;
    selected.style.padding = '6px 10px';
    selected.style.border = '1px solid #ccc';
    selected.style.borderRadius = '4px';
    selected.style.cursor = 'pointer';
    container.appendChild(selected);

    // Dropdown list
    const list = document.createElement('div');
    list.classList.add('rahthah-list');
    list.style.position = 'absolute';
    list.style.top = '100%';
    list.style.left = 0;
    list.style.right = 0;
    list.style.border = '1px solid #ccc';
    list.style.borderRadius = '4px';
    list.style.background = '#fff';
    list.style.maxHeight = '200px';
    list.style.overflowY = 'auto';
    list.style.display = 'none';
    list.style.zIndex = 9999;
    container.appendChild(list);

    // Search input
    const search = document.createElement('input');
    search.type = 'text';
    search.placeholder = 'Search...';
    search.style.width = '100%';
    search.style.boxSizing = 'border-box';
    search.style.padding = '6px 10px';
    search.style.border = 'none';
    search.style.borderBottom = '1px solid #ddd';
    list.appendChild(search);

    // Options container
    const optionsContainer = document.createElement('div');
    list.appendChild(optionsContainer);

    function renderOptions(filter = '') {
      optionsContainer.innerHTML = '';
      islands
        .filter(i => i.toLowerCase().includes(filter.toLowerCase()))
        .forEach(i => {
          const option = document.createElement('div');
          option.textContent = i;
          option.style.padding = '6px 10px';
          option.style.cursor = 'pointer';
          option.addEventListener('click', () => {
            selected.textContent = i;
            select.value = i;
            list.style.display = 'none';
          });
          option.addEventListener('mouseenter', () => option.style.background = '#f0f0f0');
          option.addEventListener('mouseleave', () => option.style.background = '#fff');
          optionsContainer.appendChild(option);
        });
    }

    renderOptions();

    // Toggle dropdown
    selected.addEventListener('click', () => {
      list.style.display = list.style.display === 'none' ? 'block' : 'none';
      search.focus();
    });

    // Filter on input
    search.addEventListener('input', () => {
      renderOptions(search.value);
    });

    // Close dropdown on click outside
    document.addEventListener('click', e => {
      if (!container.contains(e.target)) list.style.display = 'none';
    });

    // Keyboard navigation
    let index = -1;
    search.addEventListener('keydown', e => {
      const options = Array.from(optionsContainer.children);
      if (!options.length) return;
      if (e.key === 'ArrowDown') {
        index = (index + 1) % options.length;
        options.forEach(o => o.style.background = '#fff');
        options[index].style.background = '#f0f0f0';
      } else if (e.key === 'ArrowUp') {
        index = (index - 1 + options.length) % options.length;
        options.forEach(o => o.style.background = '#fff');
        options[index].style.background = '#f0f0f0';
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (index >= 0 && options[index]) {
          options[index].click();
          index = -1;
        }
      } else if (e.key === 'Escape') {
        list.style.display = 'none';
      }
    });
  }

  function populate() {
    const selects = document.querySelectorAll('select.rahthah');
    selects.forEach(select => {
      // Add placeholder option
      select.innerHTML = '';
      const placeholder = document.createElement('option');
      placeholder.value = '';
      placeholder.textContent = 'Select Island';
      select.appendChild(placeholder);

      createDropdown(select);
    });
  }

  document.addEventListener('DOMContentLoaded', populate);

  global.rahthah = { islands, populate };
})(window);
