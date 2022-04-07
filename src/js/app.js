const btn = document.querySelector('[data-toggle="popover"]');
const popover = document.querySelector('[data-widget="popover-top"]');
const popoverAdd = document.createElement('div');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const isValid = e.currentTarget.checkValidity();
        popoverAdd.innerHTML = `<div class="arrow"></div>
                                    <h3 class="popover-head">Popover title</h3>
                                <div class="popover-body">And here's some amazing content. It's very engaging. Right?</div>`;
        popover.classList.toggle('hidden')
        popover.classList.toggle('active')
        popover.insertAdjacentElement("afterbegin", popoverAdd);
});