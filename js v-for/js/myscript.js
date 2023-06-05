const { createApp } = Vue;
createApp({
    data() {
        return {
            message: 'Hello Vue!',
            shoppingListItems: [
                "pasta",
                "pane",
                "mela",
                "insalata",
            ]
            
        }
    },
    

}).mount('#app');