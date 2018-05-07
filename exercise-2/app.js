new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            alert: function () {
                alert('Alert!');
            },
            updateValue: function() {
                this.value = event.target.value;
                return this.value;
            }
        }
    });