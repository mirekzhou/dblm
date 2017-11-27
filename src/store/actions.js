import service        from  './modules/service/service-actions.js';
import loginStatus    from  './modules/loginStatus/loginStatus-actions.js';
import shareDialogStatus    from  './modules/shareDialogStatus/shareDialogStatus-actions.js';

export default {
	...service,
	...loginStatus,
	...shareDialogStatus
};