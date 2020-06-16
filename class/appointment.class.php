<?php
    require_once(__DIR__."/database.class.php");
    class Appointment extends Database {
        public $cod;
        public $cpfP;
        public $cpfC;
        public $info;
        public $date;

        private $strErr = "";

        public function registerAppo() {
            try {
                $sqlStr = "INSERT INTO compromisso(codigo, cpfPessoa, cpfCliente, info, dataComp) VALUES ('".$this->cod."','".$this->cpfP."','".$this->cpfC."','".$this->info."','".$this->date."')";
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

        public function searchAppo() {
            try {
                $sqlStr = "SELECT * FROM compromisso WHERE codigo =".$this->cod;
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

        public function updateAppo() {
            try {
                $sqlStr = "UPDATE compromisso SET cpfPessoa = '".$this->cpfP."',cpfCliente = '".$this->cpfC."',info = '".$this->info."',dataComp = '".$this->date."' WHERE codigo=".$this->cod;
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

        public function deleteAppo() {
            try {
                $sqlStr = "DELETE FROM compromisso WHERE codigo=".$this->cod;
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