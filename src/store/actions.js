import service            from  './modules/service/service-actions.js';
import loginStatus        from  './modules/loginStatus/loginStatus-actions.js';
import shareDialogStatus  from  './modules/shareDialogStatus/shareDialogStatus-actions.js';
import addressDialog      from  './modules/addressDialog/addressDialog-actions.js';
import helpDialog         from  './modules/helpDialog/helpDialog-actions.js';
import winDialog          from  './modules/winDialog/winDialog-actions.js';
import loseDialog         from  './modules/loseDialog/loseDialog-actions.js';
import alert              from  './modules/alert/alert-actions.js';

export default {
	...service,
	...loginStatus,
	...shareDialogStatus,
	...addressDialog,
	...helpDialog,
	...winDialog,
	...loseDialog,
	...alert
};