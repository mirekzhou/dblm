import service        from  './modules/service/service-actions.js';
import loginStatus    from  './modules/loginStatus/loginStatus-actions.js';

export default {
	...service,
	...loginStatus
};