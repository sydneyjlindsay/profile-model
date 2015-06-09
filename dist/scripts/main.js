$(document).ready(function() {
	
	var App = Backbone.Router.extend({
		routes: {
			'': 'profile',
			'edit': 'edit', 
		},
		profile: function() {
			$('.page').hide();
			$('#profile').show();
		},
		edit: function() {
			$('.page').hide();
			$('#edit').show();
		}
	});

	var app = new App();
	Backbone.history.start();

	var user = new UserModel();

	user.on('change', updateProfile);

	function updateProfile(UserModel) {
		$('.profile-usertitle-name').html(UserModel.get('name'));
		$('.profile-usertitle-job').html(UserModel.get('role'));
		$('.dropdown-toggle').html(UserModel.get('name'));
	}

	$('#edit form').on('submit', function(e) {
		e.preventDefault();
		user.set({
			name: $('#name').val(),
			role: $('#role').val()
		});
		
		$('#name').val('');
		$('#role').val('');
	});

});


