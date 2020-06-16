// A função ainda não definida é içada como um todo, não sendo undefined

function fn() {
  ok();
  
  function ok(){
    console.log('Esta tdo bem')
  }
}

fn();