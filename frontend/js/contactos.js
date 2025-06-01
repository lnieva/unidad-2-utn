const export_contact = document.querySelector('.export_contact')
const export_type = document.querySelector('.export_type')
const flecha_search = document.querySelector('.flecha_search')
const search_user = document.querySelector('.search_user')
const button_search = document.getElementById('button_search')
const input = document.querySelector('.search_button > input')
const search_input_contact = document.getElementById('search_input_contact')
const search_input_position = document.getElementById('search_input_position')
const remove = document.querySelector('.remove')
const edit = document.querySelector('.edit')
const action = document.querySelector('.action')

const url = 'http://localhost:3000'

// Borrar un usuario
const userRemove = (id) => {
  fetch(`http://localhost:3000/user/${id}`, {
    method: 'DELETE',
  })
  .then(res => res.text()) // or res.json()
  .then(res => console.log(res))
}

// Evento boton de Editar y Borrar
window.operateEvents = {
  'click .edit': function (e, value, row, index) {
    //alert('You click like action, row: ' + JSON.stringify(row))
  },
  'click .remove': function (e, value, row, index) {
    console.log(row)
    userRemove(row._id)
    $table.bootstrapTable('remove', {
      field: 'contact',
      values: [row.contact]
    })
  }
}

let $table = $('#table');

$table.bootstrapTable({
  url: `${url}/user`,
  method: 'get',
  dataType: 'json',
  ajaxOptions: {
    headers: { "Authorization": "Se envia token" }
  },
  //data: data,
  locale: 'es-AR',
  exportTypes: ['csv'],
  columns: [
    {
      field: 'selection',
      checkbox: true,
      align: 'center',
      valign: 'middle'
    }, {
      title: 'Contacto',
      field: 'contact',
      align: 'center',
      valign: 'middle',
      sortable: true,
      formatter: contactFormatter
    }, {
      title: 'País/Region',
      field: 'region',
      align: 'center',
      valign: 'middle',
      sortable: true,
    }, {
      title: 'Compañía',
      field: 'company',
      align: 'center',
      valign: 'middle',
      sortable: true
    }, {
      title: 'Cargo',
      field: 'position',
      align: 'center',
      valign: 'middle',
      sortable: true
    }, {
      title: 'Canal preferido',
      field: 'channel',
      class: 'test',
      align: 'center',
      valign: 'middle',
      formatter: redesFormatter
    }, {
      title: 'Interés',
      field: 'interet',
      align: 'center',
      valign: 'middle',
      sortable: true,
      formatter: interetFormatter
    }, {
      field: 'operate',
      title: 'Acciones',
      align: 'center',
      clickToSelect: false,
      events: window.operateEvents,
      formatter: operateFormatter
    }
  ]
});

// Función para actualizar los datos
const updateTable = data => {
  $table.bootstrapTable('load', data);
}

// menu desplegable de exportar contactor
export_contact.addEventListener('click', () => {
  export_type.classList.toggle('disable')
})

// desplega el menu de busqueda
flecha_search.addEventListener('click', () => {
  search_user.classList.toggle('disable')
})

// Boton de busqueda con la informacion del menu de busqueda
button_search.addEventListener('click', () => {
  read_search_option()
  document.querySelector('.flecha_search').classList.remove('disable')
  search_user.classList.add('disable')
})

// Quita/Agrega la flecha de la busqueda al escribir
input.addEventListener('keyup', () => {
  document.querySelector('.flecha_search').classList.add('disable')
  if ( input.value == "" ) {
    document.querySelector('.flecha_search').classList.remove('disable')
  }
})

// Quita el menu de busqueda al hacer click en el input de search
input.addEventListener('click', () => {
  search_user.classList.add('disable')
})

// Select en el menu de busqueda y en modal
const searchCountry = () => {
  fetch(`${url}/country`)
  .then(response => response.json())
  .then(response => {
    response.forEach( e => {
      const select_pais = document.querySelector('.select_pais')
      const option_pais = document.createElement('option')
      option_pais.classList.add('select')
      option_pais.value = e.pais
      option_pais.textContent = e.pais
      select_pais.appendChild(option_pais)
    })
  })
}

const searchCompany = () => {
  fetch(`${url}/company`)
  .then(response => response.json())
  .then(response => {
    response.forEach( e => {
      const select_compania = document.querySelector('.select_compania')
      const option_compania = document.createElement('option')
      option_compania.classList.add('select')
      option_compania.value = e.compania
      option_compania.textContent = e.compania
      select_compania.appendChild(option_compania)
    })
  })
}

const searchChannel = () => {
  fetch(`${url}/channel`)
  .then(response => response.json())
  .then(response => {
    response.forEach( e => {
      const select_channel = document.querySelector('.select_channel')
      const option_channel = document.createElement('option')
      option_channel.classList.add('select')
      option_channel.value = e.channel
      option_channel.textContent = e.channel
      select_channel.appendChild(option_channel)

      const modal_channel_select = document.querySelector('.modal_channel')
      const modal_channel_option = document.createElement('option')
      modal_channel_option.classList.add('select')
      modal_channel_option.value = e.channel
      modal_channel_option.textContent = e.channel
      modal_channel_select.appendChild(modal_channel_option)
      console.log(e.channel)
    })
  })
}

searchCountry()
searchCompany()
searchChannel()

// Lee todas las optiones de busqueda
let read_search_option = () => {

  let contact = search_input_contact.value
  let postion = search_input_position.value
  let pais = document.getElementById("pais");
  let pais_value = pais.selectedOptions[0].label;
  let compania = document.getElementById("compania");
  let compania_value = compania.selectedOptions[0].label;
  let channel = document.getElementById("channel");
  let  channel_value = channel.selectedOptions[0].label;
  let interest = document.getElementById("interest");
  let  interest_value = interest.selectedOptions[0].label;
  console.log(contact,postion,pais_value,compania_value,channel_value,interest_value )
}

//--- Exportar a CSV ----//

const exportar = (array) => {
  var x = new CSVExport(array);
  return false;
}

list = []

$("#table").on('check.bs.table uncheck.bs.table check-all.bs.table uncheck-all.bs.table', 
function () { 
  var selects = $("#table").bootstrapTable('getSelections'); 
  //console.log(selects);
  list.splice(0, list.length);
  selects.forEach(id => {
    list.push(id)
  } )
  
});

document.querySelector('#export_select').addEventListener('click', () => {
  exportar(list)
})

// ------ progress modal ------//

const range = document.querySelector('.slider')
  const textInput = document.querySelector('.textInput')
  const progress = document.querySelector('.progress')

  const change_textInput = (value) => {
    if ( value <= 25 ) {
      var bg_color = "#1CC1F5"
    }
  
    if ( value > 25 ) {
      var bg_color = "#f6c23e"
    }
    if ( value >= 50 ) {
      var bg_color = "#fd7e14"
    }
  
    if ( value >= 75 ) {
      var bg_color = "#e74a3b"
    }
    
    if ( value >= 80 ){
      progress.style.width = `${value - 2}%`
    }else{
      progress.style.width = `${value}%`
    }
    textInput.textContent = `${value} %`
    progress.style.background = bg_color
  }

  let count = 1
  const select_progress = document.querySelector('#select_progress')
  const myRange = document.querySelector('#myRange')

  for (let i = 1; i <= 20; i++ ){
    count = i * 5;
    const option = document.createElement('option')
    option.setAttribute('id',`option-${count}`)
    option.value = count
    option.textContent = `${count} %`
    select_progress.appendChild(option)    
  }

  select_progress.addEventListener('change', (event) => {
      myRange.value = event.target.value
      change_textInput(event.target.value)
    })

  range.addEventListener('input', (event) => {
    textInput.textContent = `${event.target.value} %`
    change_textInput(event.target.value)
    select_progress.value = event.target.value
  })


