require.config({
    baseUrl: "../",
    paths: {
        jquery: "res/jquery-2.1.4.min",
        underscore: "res/underscore",
        backbone: "res/backbone",
        
        model: "src/Models",
        collection: "src/Collections",
        view: "src/Views" 
    },
});

require(['src/main']);


