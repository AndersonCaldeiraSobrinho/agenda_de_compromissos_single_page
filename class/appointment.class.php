<?php
    require_once(__DIR__."/database.class.php");
    class Appointment extends Database {
        public $comprId;
        public $comprCpfVend;
        public $comprCpfCliente;
        public $comprEvent;
        public $comprNomeVend;
        public $comprNomeCliente;
        public $comprData;
        public $comprHora;


        private $strErr = "";

        public function registerCompr() {
            try {
                $sqlStr = "INSERT INTO compromisso(id, cpfVend, cpfCliente, evento, nomeVend, nomeCliente, dataDia, hora) VALUES ('".$this->comprId."','".$this->comprCpfVend."','".$this->comprCpfCliente."','".$this->comprEvent."','".$this->comprNomeVend."','".$this->comprNomeCliente."','".$this->comprData."','".$this->comprHora."')";
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
                $sqlStr = "SELECT * FROM compromisso WHERE codigo =".$this->comprId;
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
                $sqlStr = "UPDATE compromisso SET cpfVend = '".$this->cpfC."',cpfCliente = '".$this->cpfC."',evento = '".$this->comprEvent."',nomeVend = '".$this->comprNomeVend."',nomeCliente = '".$this->comprNomeCliente."',dataDia = '".$this->comprData."',hora = '".$this->comprHora."' WHERE codigo=".$this->comprId;
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
                $sqlStr = "DELETE FROM compromisso WHERE codigo=".$this->commprId;
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