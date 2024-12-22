document.addEventListener('DOMContentLoaded', () => {
    const ap = document.getElementById('a');
    const bp = document.getElementById('b');
    const cp = document.getElementById('c');
    const dp = document.getElementById('d');
    const ep = document.getElementById('e');
    const fp = document.getElementById('f');
    const gp = document.getElementById('g');
    const hp = document.getElementById('h');
    const ip = document.getElementById('i');
    const jp = document.getElementById('j');
    const kp = document.getElementById('k');
    const lp = document.getElementById('l');
    const mp = document.getElementById('m');
    const np = document.getElementById('n');
    const op = document.getElementById('o');
    const imgs = [ap,bp,cp,dp,ep,fp,gp,hp];
    const btns = document.getElementById('btn');
    const hiddenDiv = document.getElementById('hidden');
    const hiddenIma = document.getElementById('ah');
    const hiddenImb = document.getElementById('bh');
    const hiddenImc = document.getElementById('ch');
    const hiddenImd = document.getElementById('dh');
    const hiddenIme = document.getElementById('eh');
    const hiddenImf = document.getElementById('fh');
    const hiddenImg = document.getElementById('gh');
    const hiddenImh = document.getElementById('hh');
    const hiddenImi = document.getElementById('ih');
    const hiddenImj = document.getElementById('jh');
    const hiddenImk = document.getElementById('kh');
    const hiddenIml = document.getElementById('lh');
    const hiddenImm = document.getElementById('mh');
    const hiddenImn = document.getElementById('nh');
    const hiddenImo = document.getElementById('oh');
    const btn1s = document.getElementById('btn1');
    const content = document.getElementById('cont');
    btns.addEventListener('click', () => {
        if(hiddenIma.classList.contains('active')){
            hiddenIma.classList.remove('active');
            hiddenIma.classList.add('inactive');
            hiddenDiv.classList.remove('active');
            hiddenDiv.classList.add('inactive');
            btns.classList.remove('active');
            btns.classList.add('inactive');
        }
        if(hiddenImb.classList.contains('active')){
            hiddenImb.classList.remove('active');
            hiddenImb.classList.add('inactive');
            hiddenDiv.classList.remove('active');
            hiddenDiv.classList.add('inactive');
            btns.classList.remove('active');
            btns.classList.add('inactive');
        }
        if(hiddenImc.classList.contains('active')){
            hiddenImc.classList.remove('active');
            hiddenImc.classList.add('inactive');
            hiddenDiv.classList.remove('active');
            hiddenDiv.classList.add('inactive');
            btns.classList.remove('active');
            btns.classList.add('inactive');
        }
        if(hiddenImd.classList.contains('active')){
            hiddenImd.classList.remove('active');
            hiddenImd.classList.add('inactive');
            hiddenDiv.classList.remove('active');
            hiddenDiv.classList.add('inactive');
            btns.classList.remove('active');
            btns.classList.add('inactive');
        }
        if(hiddenIme.classList.contains('active')){
            hiddenIme.classList.remove('active');
            hiddenIme.classList.add('inactive');
            hiddenDiv.classList.remove('active');
            hiddenDiv.classList.add('inactive');
            btns.classList.remove('active');
            btns.classList.add('inactive');
        }
        if(hiddenImf.classList.contains('active')){
            hiddenImf.classList.remove('active');
            hiddenImf.classList.add('inactive');
            hiddenDiv.classList.remove('active');
            hiddenDiv.classList.add('inactive');
            btns.classList.remove('active');
            btns.classList.add('inactive');
        }
        if(hiddenImg.classList.contains('active')){
            hiddenImg.classList.remove('active');
            hiddenImg.classList.add('inactive');
            hiddenDiv.classList.remove('active');
            hiddenDiv.classList.add('inactive');
            btns.classList.remove('active');
            btns.classList.add('inactive');
        }
        if(hiddenImh.classList.contains('active')){
            hiddenImh.classList.remove('active');
            hiddenImh.classList.add('inactive');
            hiddenDiv.classList.remove('active');
            hiddenDiv.classList.add('inactive');
            btns.classList.remove('active');
            btns.classList.add('inactive');
        }
        if(hiddenImi.classList.contains('active')){
            hiddenImi.classList.remove('active');
            hiddenImi.classList.add('inactive');
            hiddenDiv.classList.remove('active');
            hiddenDiv.classList.add('inactive');
            btns.classList.remove('active');
            btns.classList.add('inactive');
        }
        if(hiddenImj.classList.contains('active')){
            hiddenImj.classList.remove('active');
            hiddenImj.classList.add('inactive');
            hiddenDiv.classList.remove('active');
            hiddenDiv.classList.add('inactive');
            btns.classList.remove('active');
            btns.classList.add('inactive');
        }
        if(hiddenImk.classList.contains('active')){
            hiddenImk.classList.remove('active');
            hiddenImk.classList.add('inactive');
            hiddenDiv.classList.remove('active');
            hiddenDiv.classList.add('inactive');
            btns.classList.remove('active');
            btns.classList.add('inactive');
        }
        if(hiddenIml.classList.contains('active')){
            hiddenIml.classList.remove('active');
            hiddenIml.classList.add('inactive');
            hiddenDiv.classList.remove('active');
            hiddenDiv.classList.add('inactive');
            btns.classList.remove('active');
            btns.classList.add('inactive');
        }
        if(hiddenImm.classList.contains('active')){
            hiddenImm.classList.remove('active');
            hiddenImm.classList.add('inactive');
            hiddenDiv.classList.remove('active');
            hiddenDiv.classList.add('inactive');
            btns.classList.remove('active');
            btns.classList.add('inactive');
        }
        if(hiddenImn.classList.contains('active')){
            hiddenImn.classList.remove('active');
            hiddenImn.classList.add('inactive');
            hiddenDiv.classList.remove('active');
            hiddenDiv.classList.add('inactive');
            btns.classList.remove('active');
            btns.classList.add('inactive');
        }
        if(hiddenImo.classList.contains('active')){
            hiddenImo.classList.remove('active');
            hiddenImo.classList.add('inactive');
            hiddenDiv.classList.remove('active');
            hiddenDiv.classList.add('inactive');
            btns.classList.remove('active');
            btns.classList.add('inactive');
        }
    });
    ap.addEventListener('click', () => {
        if(hiddenIma.classList.contains('inactive')){
            hiddenIma.classList.remove('inactive');
            hiddenIma.classList.add('active');
            hiddenDiv.classList.add('active');
            hiddenDiv.classList.remove('inactive');
            btns.classList.add('active');
            btns.classList.remove('inactive');
        }
    });
    bp.addEventListener('click', () => {
        if(hiddenImb.classList.contains('inactive')){
            hiddenImb.classList.remove('inactive');
            hiddenImb.classList.add('active');
            hiddenDiv.classList.add('active');
            hiddenDiv.classList.remove('inactive');
            btns.classList.add('active');
            btns.classList.remove('inactive');
        }
    });
    cp.addEventListener('click', () => {
        if(hiddenImc.classList.contains('inactive')){
            hiddenImc.classList.remove('inactive');
            hiddenImc.classList.add('active');
            hiddenDiv.classList.add('active');
            hiddenDiv.classList.remove('inactive');
            btns.classList.add('active');
            btns.classList.remove('inactive');
        }
    });
    dp.addEventListener('click', () => {
        if(hiddenImd.classList.contains('inactive')){
            hiddenImd.classList.remove('inactive');
            hiddenImd.classList.add('active');
            hiddenDiv.classList.add('active');
            hiddenDiv.classList.remove('inactive');
            btns.classList.add('active');
            btns.classList.remove('inactive');
        }
    });
    ep.addEventListener('click', () => {
        if(hiddenIme.classList.contains('inactive')){
            hiddenIme.classList.remove('inactive');
            hiddenIme.classList.add('active');
            hiddenDiv.classList.add('active');
            hiddenDiv.classList.remove('inactive');
            btns.classList.add('active');
            btns.classList.remove('inactive');
        }
    });
    fp.addEventListener('click', () => {
        if(hiddenImf.classList.contains('inactive')){
            hiddenImf.classList.remove('inactive');
            hiddenImf.classList.add('active');
            hiddenDiv.classList.add('active');
            hiddenDiv.classList.remove('inactive');
            btns.classList.add('active');
            btns.classList.remove('inactive');
        }
    });
    gp.addEventListener('click', () => {
        if(hiddenImg.classList.contains('inactive')){
            hiddenImg.classList.remove('inactive');
            hiddenImg.classList.add('active');
            hiddenDiv.classList.add('active');
            hiddenDiv.classList.remove('inactive');
            btns.classList.add('active');
            btns.classList.remove('inactive');
        }
    });
    hp.addEventListener('click', () => {
        if(hiddenImh.classList.contains('inactive')){
            hiddenImh.classList.remove('inactive');
            hiddenImh.classList.add('active');
            hiddenDiv.classList.add('active');
            hiddenDiv.classList.remove('inactive');
            btns.classList.add('active');
            btns.classList.remove('inactive');
        }
    });
    ip.addEventListener('click', () => {
        if(hiddenImi.classList.contains('inactive')){
            hiddenImi.classList.remove('inactive');
            hiddenImi.classList.add('active');
            hiddenDiv.classList.add('active');
            hiddenDiv.classList.remove('inactive');
            btns.classList.add('active');
            btns.classList.remove('inactive');
        }
    });
    jp.addEventListener('click', () => {
        if(hiddenImj.classList.contains('inactive')){
            hiddenImj.classList.remove('inactive');
            hiddenImj.classList.add('active');
            hiddenDiv.classList.add('active');
            hiddenDiv.classList.remove('inactive');
            btns.classList.add('active');
            btns.classList.remove('inactive');
        }
    });
    kp.addEventListener('click', () => {
        if(hiddenImk.classList.contains('inactive')){
            hiddenImk.classList.remove('inactive');
            hiddenImk.classList.add('active');
            hiddenDiv.classList.add('active');
            hiddenDiv.classList.remove('inactive');
            btns.classList.add('active');
            btns.classList.remove('inactive');
        }
    });
    lp.addEventListener('click', () => {
        if(hiddenIml.classList.contains('inactive')){
            hiddenIml.classList.remove('inactive');
            hiddenIml.classList.add('active');
            hiddenDiv.classList.add('active');
            hiddenDiv.classList.remove('inactive');
            btns.classList.add('active');
            btns.classList.remove('inactive');
        }
    });
    mp.addEventListener('click', () => {
        if(hiddenImm.classList.contains('inactive')){
            hiddenImm.classList.remove('inactive');
            hiddenImm.classList.add('active');
            hiddenDiv.classList.add('active');
            hiddenDiv.classList.remove('inactive');
            btns.classList.add('active');
            btns.classList.remove('inactive');
        }
    });
    np.addEventListener('click', () => {
        if(hiddenImn.classList.contains('inactive')){
            hiddenImn.classList.remove('inactive');
            hiddenImn.classList.add('active');
            hiddenDiv.classList.add('active');
            hiddenDiv.classList.remove('inactive');
            btns.classList.add('active');
            btns.classList.remove('inactive');
        }
    });
    op.addEventListener('click', () => {
        if(hiddenImo.classList.contains('inactive')){
            hiddenImo.classList.remove('inactive');
            hiddenImo.classList.add('active');
            hiddenDiv.classList.add('active');
            hiddenDiv.classList.remove('inactive');
            btns.classList.add('active');
            btns.classList.remove('inactive');
        }
    });
    btn1s.addEventListener('click', () => {
        if(content.classList.contains('animation2')){
            content.classList.remove('animation2');
            content.classList.add('animation1');
            btn1s.classList.remove('animation4');
            btn1s.classList.add('animation3');
            btn1s.textContent = '<';
        }else{
            content.classList.remove('animation1');
            content.classList.add('animation2');
            btn1s.classList.remove('animation3');
            btn1s.classList.add('animation4');
            btn1s.textContent = '>';
        }
    });
    
});
