/**
 * GET /
 * Home page.
 */

exports.index = function(req, res) {
    if (req.user) {
        res.render('chat', {
            title: 'Operator chats'
        });
        return;
    }

    res.render('home', {
        title: 'Home'
    });
};


exports.install = function(req, res) {
    res.render('install', {
        title: 'Install Utavee on your website and mobile apps'
    });
};
