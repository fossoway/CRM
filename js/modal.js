import { addRowFromForm } from './form.js';
import { loadStyle } from './loadStyle.js';


const inputList = [{
    div: 'form__item-title',
    label: 'Наименование',
    id: 'title',
    type: 'text',
    required: true,
},
{
    div: 'form__item-category',
    label: 'Категория',
    id: 'category',
    type: 'text',
    required: true,
},
{
    div: 'form__item-units',
    label: 'Единицы измерения',
    id: 'units',
    type: 'text',
    required: true,
},
{
    div: 'form__item-discount',
    label: 'Дисконт',
    id: 'discount',
    type: 'text',
    required: true,
    checkbox: 'checkbox',
},
{
    div: 'form__item-description',
    label: 'Описание',
    id: 'description',
    textarea: 5,
    required: true,
},
{
    div: 'form__item-count',
    label: 'Количество',
    id: 'count',
    type: 'number',
    required: true,
},
{
    div: 'form__item-price',
    label: 'Цена',
    id: 'price',
    type: 'number',
    required: true,
},
{
    div: 'form__item-add',
    label: 'Добавить изображение',
    id: 'add',
    type: 'file',
    required: false,
}];

const createInput = data => {
    const div = document.createElement('div');
    div.classList.add('form__item', data.div);

    const label = document.createElement('label');
    label.classList.add('form__label');
    label.for = data.id;
    label.innerText = data.label;

    const input = data.textarea ? document.createElement('textarea') : document.createElement('input');

    if (data.textarea) {
        input.classList.add('form__input-textarea'),
        input.rows = data.textarea
    } else {
        input.type = data.type
    }

    input.classList.add('form__input');
    input.id = data.id;
    input.name = data.id;
    input.required = data.required;


    if (data.checkbox) {
        label.classList.add('form__label-discount');
        input.classList.add('form__input-discount');
        input.name = 'discount_size';
        input.disabled = true;
        const checkbox = document.createElement('div');
        checkbox.classList.add('checkbox');
        const checkInput = document.createElement('input');
        checkInput.classList.add('checkbox__input');
        checkInput.id = 'discount';
        checkInput.type = 'checkbox';
        checkInput.name = 'discount';
        checkInput.value = 'yes';

        checkInput.addEventListener('change', e => {
            if (checkInput.checked) {
                input.removeAttribute('disabled');
            } else {
                input.value = '';
                input.setAttribute('disabled', 'true');
            }
        });

        checkbox.append(checkInput);
        div.append(label, checkbox, input);
        return div;
    }

    div.append(label, input);
    return div;
};

const createFormHeader = () => {
    const wrapper = document.createElement('div');
    wrapper.classList.add('form__wrapper');

    const title = document.createElement('h2');
    title.classList.add('form__title');
    title.innerText = 'Добавить товар';

    const div = document.createElement('div');
    div.classList.add('form__idnumber');

    const button = document.createElement('button');
    button.classList.add('form__id');
    button.type = 'button';
    button.innerText = 'id:';

    const id = document.createElement('p');
    id.classList.add('form__numb');

    div.append(button, id);
    wrapper.append(title, div);

    return wrapper;
};

const createFormFooter = () => {
    const footer = document.createElement('div');
    footer.classList.add('form__footer');

    const div = document.createElement('div');
    div.classList.add('form__amount');

    const text = document.createElement('p');
    text.classList.add('form__text');
    text.innerText = 'Итоговая стоимость: ';

    const cost = document.createElement('p');
    cost.classList.add('form__cost');
    
    div.append(text, cost);

    const button = document.createElement('button');
    button.classList.add('form__button');
    button.type = 'submit';
    button.innerText = 'Добавить товар';

    footer.cost = cost;

    footer.append(div, button);

    return footer;
};


const createForm = () => {
    const form = document.createElement('form');
    form.classList.add('form__form');
    form.method = 'post';

    const fieldset = document.createElement('fieldset');
    fieldset.classList.add('form__fieldset');

    const allInput = inputList.map(createInput);
    fieldset.append(...allInput);

    const footer = createFormFooter();
    form.append(fieldset, footer);

    return {
        form,
        cost: footer.cost,
    };
};


const completeInput = (data) => {
    const title = document.querySelector('#title');
    title.value = data.title;

    const price = document.querySelector('#price');
    price.value = data.price;

    const description = document.querySelector('#description');
    description.value = data.description;

    const category = document.querySelector('#category');
    category.value = data.category;

    const cost = document.querySelector('#price');
    cost.value = data.price;

    const units = document.querySelector('#units');
    units.value = data.units;

    const count = document.querySelector('#count');
    count.value = data.count;

    const discount = document.querySelector('.form__input-discount');
    discount.value = data.discount;

    const allCost = document.querySelector('.form__cost');
    allCost.innerText = data.price * data.count;

    const id = document.querySelector('.form__numb');
    id.innerText = data.id;
}


export const createModal = async (err, data) => {
    await loadStyle('css/form.css');

    const overlay = document.createElement('div');
    overlay.classList.add('overlay', 'overlay-flex');

    const section = document.createElement('section');
    section.classList.add('form');

    const header = createFormHeader();

    const close = document.createElement('button');
    close.classList.add('form__close');

    const {form, cost} = createForm();

    section.append(header, close, form);
    overlay.append(section);

    overlay.addEventListener('click', e => {
        const target = e.target;
        if (target === overlay || target.closest('.form__close')) {
            overlay.remove();
        }
    });

    form.addEventListener('change', e => {
        const count = document.querySelector('#count');
        const price = document.querySelector('#price');
        cost.innerText = count.value * price.value;
    });

    document.body.append(overlay);

    if (data) {
        completeInput(data);
        //editGood(form, data.id);
    }

    addRowFromForm(form, overlay);
};