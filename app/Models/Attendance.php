<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    protected $fillable =['user_id', 'training_id', 'schedule_id', 'status', 'completion_date'];


    public function user(){
        return $this->belongsTo(User::class);
    }

    public function training(){
        return $this->belongsTo(Training::class);
    }

    public function schedule(){
        return $this->belongsTo(Schedule::class);
    }

}
