<?php
    require_once(__DIR__."/database.class.php");

    class Seller extends Database {
        // Setup public variables from webpage
        public $cpf;
        public $nome;
        public $rg;
        public $cep;
        public $ende;
        public $num;
        public $comp;
        public $bairro;
        public $uf;
        public $dddUm;
        public $telUm;
        public $dddDois;
        public $telDois;

        // Setup private variables
        private $strErr = "";

        public function registerSeller() {
            try {
                $sqlStr = "INSERT INTO vendedor (cpf, nome, rg, cep, endereco, num, comp, bairro, uf, dddUm, telUm, dddDois, telDois) VALUES('".$this->cpf."','".$this->nome."','".$this->rg."','".$this->cep."','".$this->ende."','".$this->num."','".$this->comp."','".$this->bairro."','".$this->uf."','".$this->dddUm."','".$this->telUm."','".$this->dddDois."','".$this->telDois."')";
                if ((self::exeSql($sqlStr)) > 0) {
                    return true;
                } else {
                    $this->strErr = "Houve um erro no registro da vendedor.";
                    return false;
                }
            } catch (Exception $err) {
                $this->strErr = $err.getMessage();
                return false;
            }
        }

        public function searchSeller() {
            try {
                $sqlStr = "SELECT * FROM vendedor WHERE cpf =".$this->cpf;
                $data = self::searchDb($sqlStr);
                if ($data == null) {
                    $this->strErr = "Vendedor não encontrada.";
                }
                return $data;
            } catch (Exception $err) {
                $this->strErr = $err.getMessage();
                return null;
            }
        }

        public function updateSeller() {
            try {
                $sqlStr = "UPDATE vendedor SET nome = '".$this->nome."', rg = '".$this->rg."', cep = '".$this->cep."', endereco = '".$this->ende."', num = '".$this->num."', comp = '".$this->comp."', bairro = '".$this->bairro."', uf = '".$this->uf."', dddUm = '".$this->dddUm."', telUm = '".$this->telUm."', dddDois = '".$this->dddDois."', telDois = '".$this->telDois."' WHERE cpf=".$this->cpf;
                if (self::exeSql($sqlStr) >= 0) {
                    return true;
                } else {
                    $this->strErr = "Houve um problema na atualização da vendedor.";
                    return false;
                }
            } catch (Exception $err) {
                $this->strErr = $err.getMessage();
                return false;
            }
        }

        public function deleteSeller() {
            try {
                $sqlStr = "DELETE FROM vendedor WHERE cpf=".$this->cpf;
                if (self::exeSql($sqlStr) > 0) {
                    return true;
                } else {
                    $this->strErr = "Houve um problema na remoção da vendedor.";
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