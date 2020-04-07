module.exports = Object.freeze({
    ACTION_TYPE: {
        
        ERROR: 'ERROR',
        SUCCESS: 'SUCCESS',
        TIME_TAKEN: 'TIME_TAKEN',
        CLEAR_DATA: 'CLEAR_DATA',
        UPDATE_PLANET_LIST: 'UPDATE_PLANET_LIST',
        UPDATE_VEHICLE_LIST: 'UPDATE_VEHICLE_LIST',
        UPDATE_SELECTED_PLANET: 'UPDATE_SELECTED_PLANET',
        UPDATE_SELECTED_VEHICLE: 'UPDATE_SELECTED_VEHICLE',

        //Action Types for Loader
        BEGIN_AJAX_CALL: 'BEGIN_AJAX_CALL',
        AJAX_CALL_ERROR: 'AJAX_CALL_ERROR',
        END_API_CALL: 'END_API_CALL',
    }
});