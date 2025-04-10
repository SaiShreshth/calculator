document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.btn').forEach(button => { 
        button.addEventListener('click', function (event) {
            if (event.target.innerText === '='){
                var s = document.getElementById('display').innerHTML;
                var r = eval(s);
                document.getElementById('display').innerHTML = r;
                console.log(r);
            }else{
                if (event.target.innerText === 'C'){
                    document.getElementById('display').innerHTML = '';
                    console.log('Cleared');
                }else{
                    if (event.target.innerText === '<-'){
                        var s = document.getElementById('display').innerHTML;
                        var s = s.substring(0, s.length - 1);
                        document.getElementById('display').innerHTML = s;
                    }else{
                            document.getElementById('display').innerHTML+= event.target.innerText;
                            console.log(event.target.innerText);
                    }
                }
            }
        });
    });
});
