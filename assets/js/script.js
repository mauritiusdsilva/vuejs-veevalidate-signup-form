Vue.use(VeeValidate);


new Vue({
    el: '#app',
    data: () => ({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        otp: '',
        nationality: '',
        date: '',
        month: '',
        year: '',
        password: '',
        confirmpassword: '',
    }),
    methods: {
        validateBeforeSubmit() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    // eslint-disable-next-line
                    alert('Form Submitted!');
                    return;
                }
                alert('Errors in form!');
            });
        }
    }
});