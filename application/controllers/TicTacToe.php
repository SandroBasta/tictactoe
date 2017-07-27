<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
*
*/
 class TicTacToe extends CI_Controller {

public function index(){

    $this->load->view('templates/head');
	$this->load->view('game');
	$this->load->view('templates/footer');
}


}