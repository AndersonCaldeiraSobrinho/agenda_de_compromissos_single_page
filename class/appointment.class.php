<?php
    require_once(__DIR__."/database.class.php");
    class Appointment extends Database {
        public $id;
        public $cpfVend;
        public $cpfCliente;
        public $event;
        public $comprData;
        public $comprHora;


        private $strErr = "";

        public function registerCompr() {
            try {
                $sqlStr = "INSERT INTO compromisso(id, cpfVend, cpfCliente, evento, dataDia, hora) VALUES ('".$this->id."','".$this->cpfVend."','".$this->cpfCliente."','".$this->event."','".$this->comprData."','".$this->comprHora."')";
                if (self::exeSql($sqlStr) > 0) {
                    return true;
                } else {
                    $this->strErr = "Houve um erro no registro do compromisso."; 
                    return false;
                }
            } catch (Exception $err) {
                $this->strErr = $err.getMessage();
                return false;
            }
        }

        public function searchCompr() {
            try {
                $sqlStr = "SELECT * FROM compromisso WHERE id =".$this->id;
                $data = self::searchDb($sqlStr);
                if ($data == null) {
                    $this->strErr = "Compromisso não encontrado.";
                }
                return $data;
            } catch (Exception $err) {
                $this->strErr = $err.getMessage();
                return null;
            }
        }

        public function updateCompr() {
            try {
                $sqlStr = "UPDATE compromisso SET cpfVend = '".$this->cpfVend."',cpfCliente = '".$this->cpfCliente."',evento = '".$this->event."',dataDia = '".$this->comprData."',hora = '".$this->comprHora."' WHERE id=".$this->id;
                if (self::exeSql($sqlStr) >= 0) {
                    return true;
                } else {
                    $this->strErr = "Houve um problema na atualização do compromisso.";
                    return false;
                }
            } catch (Exception $err) {
                $this->strErr = $err.getMessage();
                return false;
            }
        }

        public function deleteCompr() {
            try {
                $sqlStr = "DELETE FROM compromisso WHERE id=".$this->commprId;
                if (self::exeSql($sqlStr) > 0) {
                    return true;
                } else {
                    $this->strErr = "Houve um problema na remoção do compromisso.";
                    return false;
                }
            } catch (Exception $err) {
                $this->strErr = $err.getMessage();
                return false;
            }
        }

        public function getErr() {
            return $this->strErr;
        }
    }
?>