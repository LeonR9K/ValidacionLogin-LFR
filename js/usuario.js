function verificarUsuario() {
    
    
    let usuario = $('#txt_usu').val();
    let contra = $('#txt_con').val();

    if (usuario.length == 0 || contra.length == 0) {
        return Swal.fire(

            'Advertencia',
            'llenar los campos vacios',
            'Warning'

        )
    }

    $.ajax({
        url:'../controller/usuarios/controlador_verificar_usuario.php',
        type:"POST",
        data:{
            user: usuario,
            pass: contra
        }
    }).done(
        function(resp){
            alert(resp);
        }
    )
    
}