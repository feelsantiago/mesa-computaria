import $ from 'jquery';

export default class DropdownComponent {
    constructor(query) {
        this.query = query;

        this.dropdownContainer = $(`${query} .dropdown-container`);
        this.btn = $(`${query} .dropdown-btn`);
        this.items = $(`${query} .dropdown-item`);
        this.list = $(`${query} .dropdown-list`);
        this.selectedItem = $(`${query} .selected`);

        /* codes between theses coments are made just for test */
        this.enableButton = $(`${query} #e`);
        this.disableButton = $(`${query} #d`);
        this.clickE();
        this.clickD();
        /* codes between theses coments are made just for test */

        this.addDropdownClickEventListner();
        this.addItemClickEventListner();
    }

    /* codes between theses coments are made just for test */
    clickE() {
        this.enableButton.on('click', () => {
            this.setEnabled();
            console.log(this.isDisabled());
            console.log(this.dropdownContainer.attr('disabled'));
        });
    }

    clickD() {
        this.disableButton.on('click', () => {
            this.setDisabled();
            console.log(this.isDisabled());
            console.log(this.dropdownContainer.attr('disabled'));
        });
    }
    /* codes between theses coments are made just for test */

    setEnabled() {
        this.dropdownContainer.prop('disabled', false);
        this.dropdownContainer.removeClass('disabled');
    }

    setDisabled() {
        this.dropdownContainer.prop('disabled', true);
        this.dropdownContainer.addClass('disabled');
    }

    isDisabled() {
        if (this.dropdownContainer.hasClass('disabled')) {
            return true;
        }

        return false;
    }

    addDropdownClickEventListner() {
        this.btn.on('click', () => {
            this.list.toggle();
        });
    }

    addItemClickEventListner() {
        this.items.on('click', (event) => {
            this.unselectItem();
            this.selectItem(event.currentTarget);
            this.list.toggle();
        });
    }

    updateDropdown() {
        this.btn.html(this.selectedItem.text());
    }

    unselectItem() {
        this.items.removeClass('selected');
    }

    selectItem(item) {
        this.selectedItem = $(item);
        this.selectedItem.addClass('selected');
        this.updateDropdown();
    }
}

