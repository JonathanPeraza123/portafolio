var modal = document.getElementById('modalForm');
var btnClose = document.getElementById('closeModal');
const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    event.preventDefault()

    modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
    modal.style.display = 'block';
    setTimeout(() => { modal.style.opacity = 1; });

    const form = new FormData(this)
    const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    
    if(response.ok){
        this.reset()
        
        modal.style.backgroundColor = 'rgba(0,0,0,0.5)';
        modal.style.display = 'block';
        setTimeout(() => { modal.style.opacity = 1; });
    }
}

btnClose.addEventListener('click', (e) => {
    modal.style.display = "none";
    modal.className="modal fade";
});