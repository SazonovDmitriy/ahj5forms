test('app, btn.click, addHtml', () => {

    const btnClick = 
        `<div class="container">
        <button type="button" class="btn" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on top
        </button>
        <div data-widget="popover-top" class="hidden">

        </div>
    </div>`;


    const test = `<div class="arrow"></div>
                    <h3 class="popover-head">Popover title</h3>
                 <div class="popover-body">And here's some amazing content. It's very engaging. Right?</div>`

    expect(btnClick.innerHTML).toEqual(test.innerHTML);
})

test('app, btn.click, addHtml', () => {

    const btnClick = 
        `<div class="container">
        <button type="button" class="btn" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
        Popover on top
        </button>
        <div data-widget="popover-top" class="hidden">

        </div>
    </div>`;


    const test = `<div class="arrow"></div>
                    <h3 class="popover-head">Popover title</h3>
                 <div class="popover-body">And here's some amazing content. It's very engaging. Right?</div>`

    expect(!btnClick.innerHTML).toEqual(!test.innerHTML);
})