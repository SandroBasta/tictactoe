<?php

defined('BASEPATH') OR exit('No direct script access allowed');

class TicTacToe extends CI_Controller  {

	 public function __construct()
    {
        parent::__construct();

        $this->load->model('Scores') ;
    }   

public function index(){

    $this->load->view('templates/head');
    $data['results']=$this->Scores->get_scores();
	$this->load->view('game',$data);
	$this->load->view('templates/footer');
}

 public function store(){       
                
         $this->Scores->set_scores();  
                  
        }

}