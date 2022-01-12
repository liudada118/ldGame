var util = {
    /**
     * 
     * @param {array} keyCodeArr 
     * @param {*} keyCode 
     * @param {*} actionCodeArr 
     * @param {*} actionObj 
     * @param {*} actionName 
     */
    bindAction(keyCodeArr, keyCode, actionCodeArr, actionObj, actionName , aniName) {
        
        if (keyCodeArr.includes(keyCode)) {
            
            if (!actionObj[aniName]) {
                actionCodeArr.push(actionName)
            }
            actionObj[aniName] = true
        }
    },
    cancel(){
        
    }
}

export {util}
