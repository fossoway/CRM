import { addRowFromForm } from './form.js';
import { URLserver, fetchRequest } from './goods.js';
import { loadStyle } from './loadStyle.js';
import { addValidationCyrillicSpace, addValidationNumeric, addValidationCyrillic } from './utils.js';


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

const createFormInputTitle = () => {
    const div = document.createElement('div');
    div.classList.add('form__item', 'form__item-title');

    const label = document.createElement('label');
    label.classList.add('form__label');
    label.innerText = 'Наименование';

    const input = document.createElement('input');
    input.classList.add('form__input');
    input.type = 'text';
    input.id = 'title';
    input.name = 'title';
    input.required = true;

    input.addEventListener('input', () => addValidationCyrillicSpace(input));

    div.append(label, input);

    return div;
};

const createFormInputCategory = async () => {
    const div = document.createElement('div');
    div.classList.add('form__item', 'form__item-category');

    const label = document.createElement('label');
    label.classList.add('form__label');
    label.innerText = 'Категория';

    const input = document.createElement('input');
    input.classList.add('form__input');
    input.type = 'text';
    input.id = 'category';
    input.name = 'category';
    input.required = true;
    input.setAttribute ('list','category-list');

    const datalist = document.createElement('datalist');
    datalist.id = 'category-list';

    const URLcategoryList = `${URLserver}/api/category`;
    const optionList = await fetchRequest(URLcategoryList, {
        method: 'get',
    });

    optionList.map(option => {
        datalist.insertAdjacentHTML('afterbegin', `
            <option value='${option}'></option>
        `)
    })

    input.addEventListener('input', () => addValidationCyrillicSpace(input));

    div.append(label, input, datalist);

    return div;
};

const createFormInputUnits = () => {
    const div = document.createElement('div');
    div.classList.add('form__item', 'form__item-units');

    const label = document.createElement('label');
    label.classList.add('form__label');
    label.innerText = 'Единицы измерения';

    const input = document.createElement('input');
    input.classList.add('form__input');
    input.type = 'text';
    input.id = 'units';
    input.name = 'units';
    input.required = true;

    input.addEventListener('input', () => addValidationCyrillic(input));

    div.append(label, input);

    return div;
};

const createFormInputDiscount = () => {
    const div = document.createElement('div');
    div.classList.add('form__item', 'form__item-discount');

    const label = document.createElement('label');
    label.classList.add('form__label');
    label.innerText = 'Дисконт';

    const checkbox = document.createElement('div');
    checkbox.classList.add('checkbox');

    const checkboxInput = document.createElement('input');
    checkboxInput.classList.add('checkbox__input');
    checkboxInput.type = 'checkbox';
    checkboxInput.id = 'discount';
    checkboxInput.name = 'discount';
    checkboxInput.value = 'yes';

    checkbox.append(checkboxInput);

    const input = document.createElement('input');
    input.classList.add('form__input', 'form__input-discount');
    input.type = 'text';
    input.id = 'discount';
    input.name = 'discount_size';
    input.required = true;
    input.disabled = true;

    input.addEventListener('input', () => addValidationNumeric(input));

    checkboxInput.addEventListener('change', e => {
        if (checkboxInput.checked) {
            input.removeAttribute('disabled');
        } else {
            input.value = '';
            input.setAttribute('disabled', 'true');
        }
    });

    div.append(label, checkbox, input);

    return div;
};

const createFormInputDescription = () => {
    const div = document.createElement('div');
    div.classList.add('form__item', 'form__item-description');

    const label = document.createElement('label');
    label.classList.add('form__label');
    label.innerText = 'Описание';

    const textarea = document.createElement('textarea');
    textarea.classList.add('form__input', 'form__input-textarea');
    textarea.row = 5;
    textarea.id = 'description';
    textarea.name = 'description';
    textarea.required = true;

    textarea.addEventListener('input', () => addValidationCyrillicSpace(textarea));

    div.append(label, textarea);

    return div;
};

const createFormInputCount = () => {
    const div = document.createElement('div');
    div.classList.add('form__item', 'form__item-count');

    const label = document.createElement('label');
    label.classList.add('form__label');
    label.innerText = 'Количество';

    const input = document.createElement('input');
    input.classList.add('form__input');
    input.type = 'text';
    input.id = 'count';
    input.name = 'count';
    input.required = true;

    input.addEventListener('input', () => addValidationNumeric(input));

    div.append(label, input);

    return div;
};

const createFormInputPrice = () => {
    const div = document.createElement('div');
    div.classList.add('form__item', 'form__item-price');

    const label = document.createElement('label');
    label.classList.add('form__label');
    label.innerText = 'Цена';

    const input = document.createElement('input');
    input.classList.add('form__input');
    input.type = 'text';
    input.id = 'price';
    input.name = 'price';
    input.required = true;

    input.addEventListener('input', () => addValidationNumeric(input));

    div.append(label, input);

    return div;
};

const createFormInputAdd = () => {
    const div = document.createElement('div');
    div.classList.add('form__item', 'form__item-add');

    const label = document.createElement('label');
    label.classList.add('form__label');
    label.innerText = 'Добавить изображение';

    const input = document.createElement('input');
    input.classList.add('form__input', 'form__input-add');
    input.type = 'file';
    input.id = 'image';
    input.name = 'image';

    div.append(label, input);

    return div;
};

const createFormInputs = async () => {

    const title = createFormInputTitle();
    const category = await createFormInputCategory();
    const units = createFormInputUnits();
    const discount = createFormInputDiscount();
    const description = createFormInputDescription();
    const count = createFormInputCount();
    const price = createFormInputPrice();
    const add = createFormInputAdd();

    const imagePreview = document.createElement('div');
    imagePreview.classList.add('form__item-img');

    const inputs = {
        title, 
        category, 
        units, 
        discount, 
        description, 
        count, 
        price, 
        add, 
        imagePreview,
    };

    return inputs;
};


const createForm = async () => {
    const form = document.createElement('form');
    form.classList.add('form__form');
    form.method = 'post';

    const fieldset = document.createElement('fieldset');
    fieldset.classList.add('form__fieldset');

    const preview = document.createElement('div');
    preview.classList.add('form__item-img');

    const inputs = await createFormInputs();
    fieldset.append(
        inputs.title,
        inputs.category,
        inputs.units,
        inputs.discount,
        inputs.description,
        inputs.count,
        inputs.price,
        inputs.add,
        inputs.imagePreview
        );

    const footer = createFormFooter();
    form.append(fieldset, footer);

    return {
        form,
        cost: footer.cost,
        inputs,
    };
};


const completeInput = (data, inputs) => {
    inputs.title.lastChild.value = data.title;
    inputs.price.lastChild.value = data.price;
    inputs.description.lastChild.value = data.description;
    inputs.category.children[1].value = data.category;
    inputs.price.lastChild.value = data.price;
    inputs.units.lastChild.value = data.units;
    inputs.count.lastChild.value = data.count;

    const img = document.createElement('img');
    const src = `https://gabby-perfect-harbor.glitch.me/${data.image}`;
    img.src = src;
    inputs.imagePreview.append(img);

    inputs.discount.lastChild.value = data.discount;

    const allCost = document.querySelector('.form__cost');
    allCost.innerText = `${data.price * data.count} ₽`;

    const id = document.querySelector('.form__numb');
    id.innerText = data.id;
}


const previewImg = () => {
    const file = document.querySelector('#image');
    const preview = document.querySelector('.form__item-img');
    const img = document.createElement('img');

    file.addEventListener('change', () => {
        if (file.files.length > 0) {
            const src = URL.createObjectURL(file.files[0]);
            const size = file.files[0].size;
            img.src = src;
            if (size > 1048576) {
                preview.innerText = 'Изображение не должно превышать размер 1 МБ'
            } else {
                preview.innerText = '';
                preview.append(img);
            }
        }
    })
};

export const createModal = async (err, data) => {
    await loadStyle('css/form.css');

    if (err) {
        console.warn(err);
        const p = document.createElement('p');
        p.textContent = err;
        tbody.innerText = '';
        tbody.append(p);
        return;
    }

    const overlay = document.createElement('div');
    overlay.classList.add('overlay', 'overlay-flex');

    const section = document.createElement('section');
    section.classList.add('form');

    const header = createFormHeader();

    const close = document.createElement('button');
    close.classList.add('form__close');

    const {form, cost, inputs} = await createForm();

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
        cost.innerText = `${count.value * price.value} ₽`;
    });

    document.body.append(overlay);

    previewImg();

    if (data) {
        completeInput(data, inputs);
        addRowFromForm(form, overlay, data.id);
    } else {
        addRowFromForm(form, overlay);
    }
};