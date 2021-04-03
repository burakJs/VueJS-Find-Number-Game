window.addEventListener('load',()=>{
	var app = new Vue({
	  el: '#app',
	  data: {
	   gelsayı:'',
	   gidensayı:'',
	   gidenbasamak:[],
	   gelbasamak:[],
	   started:false,
	   sonuc:'',
	   i:null,
	   sayac:0,
	   bilgi:'',
	   oran:0,
	   renk:'',
	  },
	  methods:{
	  	start:function(){
	  			this.started=true;
	  			while(this.i<4) {
	  				this.gelsayı += (Math.floor((Math.random()*9)+1)).toString() ;
	  				this.i++;
	  			}
	  			this.gelbasamak=this.gelsayı.split('');
	  		},
	  	guess:function(){
	  		
	  			this.sonuc='';
	  			this.sayac++;
					this.gidenbasamak=this.gidensayı.split('');	
					for (this.i = 0; this.i < 4; this.i++) {
    					if (this.gelbasamak[this.i]==this.gidenbasamak[this.i]) {
	  						this.sonuc += '+';
	  						this.oran=((100/4)*(this.sonuc.length))+'%';
	  						if (this.oran=='25%') {this.renk='red';}
	  						if (this.oran=='50%') {this.renk='yellow';}
	  						if (this.oran=='75%') {this.renk='#4bff00';}
	  						if (this.oran=='100%') {this.renk='#34b100';}
							}
							if(this.sonuc=='++++'){
									this.bilgi=`Tebrikler, ${this.sayac} adımda tamamladınız... Sayınız ${this.gelsayı}`;
	  							this.sonuc='';
	  						}	
						}	
					this.i++;
	  		},	
		  }	      
    }
	)
})		
