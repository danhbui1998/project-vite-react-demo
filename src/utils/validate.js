/*rules = {
    name: [{ required: true, message: 'Xin vui lòng điền họ tên' }],
    email: [
        { required: true, message: 'Xin vui lòng điền email' },
        { regexp: 'email', message: 'Email không đúng. Vui lòng nhập lại' },
    ],
};*/

/*forms ={
    name: 'ABC',
    email: 'abc@abc.com',
}*/
/*errorObject = {
    email: 'Xin vui lòng nhập lại email',
};*/

const ERROR_MESSAGE = {
    required: 'Vui lòng nhập vào trường này',
    regexp: 'Vui lòng nhập lại',
};
const REGEXP = {
    email: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    phone: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
};
export const validate = (rules, forms) => {
    const errorObject = {};
    for (let name in rules) {
        for (let rule of rules[name]) {
            if (rule.required) {
                if (!forms[name]?.trim()) {
                    errorObject[name] = rule.message || ERROR_MESSAGE.required;
                }
            }
            if (rule.regexp && forms[name]) {
                let regexp = rule.regexp;
                if (regexp in REGEXP) {
                    regexp = REGEXP[regexp];
                } else if (!(regexp instanceof RegExp)) {
                    regexp = new RegExp();
                }
                if (!regexp.test(forms[name])) {
                    errorObject[name] = rule.message || ERROR_MESSAGE.regexp;
                }
            }
        }
    }
    return errorObject;
};
