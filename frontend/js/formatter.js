const operateFormatter = (value, row, index) => {
    return `
      <div class="actions-container">
        <a class="action" title="Action" style="border: none; background: none;">
          <i class="fas fa-ellipsis-h"></i>
        </a>
        <div class="button_int">
          <a class="remove" href="javascript:void(0)" title="Remove">
            <i class="fa fa-trash"></i>
          </a>
          <a rel="tooltip" title="Edit" class="edit col ml-1" data-toggle="modal" data-target="#modify_User" href="javascript:void(0)">
            <i class="fas fa-pen"></i>
          </a>
        </div>
      </div>
    `;
  }

  const contactFormatter = (value, row, index) => {
    return `    
      <div class="row">
        <img src="../img/profiles/1.jpg" class="rounded-circle profile_photo" alt="profile" >
        <div class="col align-middle">
          <div>
            ${value}
          </div>
          <span class="fs-1"><small>
            ${row.email}
          </small></span>
        </div>
      </div>
    `;
  }

  const interetFormatter = (value,row,index) => {
    if ( value <= "25" ) {
      var bg_color = "bg-success"
    }
  
    if ( value > "25" ) {
      var bg_color = "bg-warning"
    }
  
    if ( value >= "75" ) {
      var bg_color = "bg-danger"
    }
  
    return `
    <div class="row" style="margin: 0 1px 0 1px">
      <div class="" style="position: relative; margin-right: 5px; top: -3px">
        <label class="">${value}</label><label>%</label>
      </div>
      <div class="progress col" style="height: 7px; top: 5px">
        <div class="progress-bar ${bg_color} row" role="progressbar" style="width: ${value}%" aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </div>
    `;
  }

  const redesFormatter = (value,row,index) => {
    return `
      <div class="row align-items-center" style="width: 10rem;">
      ${value.map(item => `<span class="ml-1 mb-2 btn tx-s">${item.comunication}</span>`).reduce((a,b) => a + b)}
      </div>`
}

//${value.map(item => `<span class="ml-1 mb-2 btn tx-s">${item.channel}</span>`).reduce((a,b) => a + b)}