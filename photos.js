var that;
class banana {
    constructor(box, sudu) {
        that = this;
        this.box = document.querySelector(box);

        this.li1 = document.querySelectorAll(box + ">.ul1>li");
        this.li2 = document.querySelectorAll(box + ">.ul2>li");

        this.left = document.querySelector(box + ">#left");
        this.right = document.querySelector(box + ">#right");

        this.sudu = sudu * 1000;
        this.dingshiqi;
        this.index = 0;
        this.qidong();
        this.ruko();

    }
    ruko() {
        this.left.onclick = this.leftclick;
        this.right.onclick = this.rightclick;
        for (var j = 0; j < this.li2.length; j++) {
            this.li2[j].index = j;
            this.li2[j].onclick = this.smallclick;
        }


    }
    leftclick() {
        clearInterval(that.dingshiqi);

        that.index--;

        if (that.index < 0) {
            that.index = that.li1.length - 1;
        }
        that.style();
        that.qidong();
    }
    rightclick() {
        clearInterval(that.dingshiqi);

        that.index++;

        if (that.index > that.li1.length - 1) {
            that.index = 0;
        }
        that.style();
        that.qidong();
    }
    smallclick() {
        clearInterval(that.dingshiqi);

        that.index = this.index;
        that.style();
        that.qidong();
    }
    qidong() {
        this.dingshiqi = setInterval(this.zd, this.sudu);
    }
    zd() {
        that.index++;
        if (that.index > that.li1.length - 1) {
            that.index = 0;
        }
        that.style();
    }
    style() {
        for (var i = 0; i < that.li1.length; i++) {
            that.li1[i].style.cssText = "z-index:0";
            that.li2[i].style.cssText = "color:#000;background-color:#fff;";
        }
        that.li1[that.index].style.cssText = "z-index:100";
        that.li2[that.index].style.cssText = "color:#fff;background-color:red;";
    }
}
new banana(".box", 3);