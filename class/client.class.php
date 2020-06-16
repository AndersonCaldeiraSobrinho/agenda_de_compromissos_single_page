<?php
    require_once(__DIR__."./database.class.php");

    class Client extends Database {
        public $cpf;
        public $name;
        public $phone;

        private $strErr = "";

        public function registerClient() {
            try {
                $sqlStr = "INSERT INTO cliente (cpf, nome, telefone) VALUE('".$this->cpf."','".$this->name."','".$this->phone."')";
                if (self::exeSql($sqlStr) > 0) {
                    return true;
                } else {
                    $this->strErr = "Houve um erro no registro do cliente.";
                    return false;
                }
            } catch (Exception $err) {
                $this->strErr = $err.getMessage();
                return false;
            }
        }

        public function searchClient() {
            try {
                $sqlStr = "SELECT * FROM cliente WHERE cpf=".$this->cpf;
                $data = self::searchDb($sqlStr);
                if ($data == null) {
                    $this->strErr = "Cliente não encontrado.";
                }
                return $data;
            } catch (Exception $err) {
                $this->strErr = $err.getMessage();
                return null;
            }
        }

        public function updateClient() {
            try {
                $sqlStr = "UPDATE cliente SET nome = '".$this->name."',telefone = '".$this->phone."' WHERE cpf=".$this->cpf;
                if (self::exeSql($sqlStr) >= 0) {
                    return true;
                } else {
                    $this->strErr = "Houve um problema na atualização do cliente.";
                    return false;
                }
            } catch (Exception $err) {
                $this->strErr = $err.getMessage();
                return false;
            }
        }

        public function deleteClient() {
            try {
                $sqlStr = "DELETE FROM cliente WHERE cpf=".$this->cpf;
                if (self::exeSql($sqlStr) > 0) {
                    return true;
                } else {
                    $this->strErr = "Houve um problema na remoção do cliente.";
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