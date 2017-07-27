<?php
class Scores extends CI_Model {

        public function __construct()
        {
                $this->load->database();
        }
    
        public function get_scores()
        {
                
                        $limit=5;
                        $start_row=0;
                        $this->db->order_by("id", "DESC");
                        $query = $this->db->get('result', $limit, $start_row);
                        return $query->result_array();
        
               
        }
    
        public function set_scores()
        {
            $this->load->helper('url');

            $data = array(
                              
                'winner' => $this->input->post('winner')
            );
            
             $this->db->insert('result', $data);
        }
}
