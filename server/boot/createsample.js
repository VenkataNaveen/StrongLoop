module.exports = function(app) {
    app.datasources.mysqldb.automigrate('college', function(err) {
        if (err) console.log(err);
        app.models.college.create([{
                collegename: 'vrsec',
                collegeadress: 'kanuru',
                collegebranche: ['ece', 'mech'],
            }, {
                collegename: 'vrs',
                collegeadress: 'kanu',
                collegebranche: ['ec', 'mec'],
            },

        ], function(err, college) {
            if (err) console.log(err);

            console.log('Models created: \n', college);
        });
    });
};
