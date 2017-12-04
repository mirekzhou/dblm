import loginStatus        from  './modules/loginStatus/loginStatus-mutations.js';
import shareDialogStatus  from  './modules/shareDialogStatus/shareDialogStatus-mutations.js';
import addressDialog      from  './modules/addressDialog/addressDialog-mutations.js';
import alert              from  './modules/alert/alert-mutations.js';

export default {
	...loginStatus,
	...shareDialogStatus,
	...addressDialog,
	...alert
};
