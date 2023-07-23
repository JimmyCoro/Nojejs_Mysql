function index(req, res) {
    req.getConnection((err, conn) => {        
        conn.query('SELECT * FROM tasks', (err, tasks) =>{
            if(err){
                res.json(err);
            }
            console.log(tasks)
        });
    });
    res.render('tasks/index')
};

function create(req, res) {
    res.render('tasks/create');
};

function store(req, res) {
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO tasks SET ?', [data], (err, navi) =>{
            console.log(navi)
            res.redirect('/tasks');
        });
    });
}



module.exports = {
    index: index,
    create: create,
    store: store,
}