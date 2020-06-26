<?php
class Database {
    private $server     = "localhost";
    private $db         = "projectds";
    private $user       = "root";
    private $passwd     = "brasileiroo951...";
    private $strErr     = "";
    private $connection = "";

    private function connect() {
        try {
            $this->connection = mysqli_connect($this->server, $this->user, $this->passwd, $this->db);
            if ($this->connection) {
                mysqli_select_db($this->connection, $this->db);
                return true;
            } else {
                $this->strErr = "Houve um problema na conexão com o banco de dados";
                return false;
            }
        } catch (Exception $err) {
            $this->strErr = $err.getMessage();
            return false;
        }
    }

    private function disconnect() {
        try {
            if ($this->connection) {
                mysqli_close($this->connection);
                return true;
            } else {
                $this->strErr = "Houve um problema enquanto desconectava do banco de dados";
                return false;
            }
        } catch (Exception $err) {
            $this->strErr = $err.getMessage();
            return false;
        }
    }

    public function exeSql($strSql) {
        try {
            $back = -1;
            if ($this->connect()) {
                $data = mysqli_query($this->connection, $strSql);
                $back = mysqli_affected_rows($this->connection);
            }
            return $back;
        } catch (Exception $err) {
            $this->strErr = $err.getMessage();
            return false;
        } finally {
            $this->disconnect();
        }
    }

    public function searchDb($strSql) {
        try {
            $register = null;
            if ($this->connect()) {
                $data = mysqli_query($this->connection, $strSql);
                if (mysqli_affected_rows($this->connection) > 0) {
                    $register = mysqli_fetch_array($data);
                }
            }
            return $register;
        } catch (Exception $err) {
            $this->strErr = $err.getMessage();
            return false;
        } finally {
            $this->disconnect();
        }
    }

    public function getErr() {
        return $this->strErr;
    }
}
?>