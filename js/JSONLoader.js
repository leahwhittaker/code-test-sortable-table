/**
 * Loads in a JSON file and calls success and fail callback functions.
 * @namespace
 */
JSONLoader = {

    /**
    * Loads a JSON data file.
    * @param {string} path The url or relative path of the JSON data file.
    * @param {function} success The callback function called upon the successful load of the JSON file.
    * @param {function} error The callback function called upon an error during the load of the JSON file.
    * @function load
    * @memberof JSONLoader
    */
    load: function(path, success, error) {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    if (success)
                        success(JSON.parse(xhr.responseText));
                } else {
                    if (error) {
                        error(xhr);
                    }
                }
            }
        };
        xhr.onerror = function() {
            error(xhr);
        };
        xhr.open("GET", path, true);
        xhr.send();
    }

}