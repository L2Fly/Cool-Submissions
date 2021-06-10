var entry = new Vue({
	el: "#entry",
	data: {
		nameErrorMsg: "",
		emailErrorMsg: "",
		name: "",
		email: "",
		submit: ""
	},

	watch: {
		name: function (name) {
			if (this.name.length < 2) {
				this.nameErrorMsg =
					"Requires at least two characters to submit.";
			} else {
				this.nameErrorMsg = null;
			}
		},

		email: function (email) {
			var address = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			if (address.test(email)) {
				this.emailErrorMsg = null;
			} else {
				this.emailErrorMsg = "Please enter a valid e-mail address.";
			}
		}
	},

	methods: {
		validate: function () {
			if (this.nameErrorMsg == null && this.emailErrorMsg == null) {
				this.submit =
					"Submitted";
			} else {
				this.submit = "Not submitted";
			}
		}
	}
});

var character1 = new Vue({
	el: "#character1",
	data: {
			firstname:false
  },
  methods:{
    changename1:function(){
      this.firstname=!this.firstname
    }
  }
  
})

  var  character2= new Vue({
	el: "#character2",
	data: {
			secondname:false
  },
  methods:{
    changename2:function(){
      this.secondname=!this.secondname
    }
  }
  
  })
  
  var character3 = new Vue({
	el: "#character3",
	data: {
			thirdname:false
  },
  methods:{
    changename3:function(){
      this.thirdname=!this.thirdname
    }
  }
  })