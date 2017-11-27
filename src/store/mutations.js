import loginStatus    from  './modules/loginStatus/loginStatus-mutations.js';
import shareDialogStatus    from  './modules/shareDialogStatus/shareDialogStatus-mutations.js';

export default {
	...loginStatus,
	...shareDialogStatus
};
