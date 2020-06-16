<?php
    require_once(__DIR__."/database.class.php");

    class Person extends Database {
        // Setup public variables from webpage
        public $cpf;
        public $name;
        public $phone;

        // Setup private variables
        private $strErr = "";

        public function registerPerson() {
            try {
                $sqlStr = "INSERT INTO pessoa (cpf, nome, telefone) VALUES ('".$this->cpf."','".$this->name."','".$this->phone."')";
                if ((self::exeSql($sqlStr)) > 0) {
                    return true;
                } else {
                    $this->strErr = "Houve um erro no registro da pessoa.";
                    return false;
                }
            } catch (Exception $err) {
                $this->strErr = $err.getMessage();
                return false;
            }
        }

        public function searchPerson() {
            try {
                $sqlStr = "SELECT * FROM pessoa WHERE cpf =".$this->cpf;
                $data = self::searchDb($sqlStr);
                if ($data == null) {
                    $this->strErr = "Pessoa não encontrada.";
                }
                return $data;
            } catch (Exception $err) {
                $this->strErr = $err.getMessage();
                return null;
            }
        }

        public function updatePerson() {
            try {
                $sqlStr = "UPDATE pessoa SET nome = '".$this->name."',telefone = '".$this->phone."' WHERE cpf=".$this->cpf;
                if (self::exeSql($sqlStr) >= 0) {
                    return true;
                } else {
                    $this->strErr = "Houve um problema na atualização da pessoa.";
                    return false;
                }
            } catch (Exception $err) {
                $this->strErr = $err.getMessage();
                return false;
            }
        }

        public function deletePerson() {
            try {
                $sqlStr = "DELETE FROM pessoa WHERE cpf=".$this->cpf;
                if (self::exeSql($sqlStr) > 0) {
                    return true;
                } else {
                    $this->strErr = "Houve um problema na remoção da pessoa.";
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