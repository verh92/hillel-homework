function Accordeon(wrapper) {
    this.wrapper = wrapper;
    this.accItems = [];

    this.init();
}

Accordeon.prototype.init = function () {
    this.wrapper.addEventListener('click', this.onClick.bind(this));
};

Accordeon.prototype.onClick = function (e) {
    if(e.target.nextElementSibling.classList.contains('active')) {
        e.target.nextElementSibling.classList.remove('active');
    }else {
        Array.prototype.forEach.call(this.wrapper.children, e => {
            e.children[1].classList.remove('active');
        })
        e.target.nextElementSibling.classList.add('active')
    };
};
