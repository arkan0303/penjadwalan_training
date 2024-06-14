<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    use HasFactory;
    protected $this = [
        'training_id',
        'date',
        'created_by',
    ];

    public function training() {
        return $this->belongsTo(Training::class);
    }

    public function creator() {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function assignedEmployees() {
        return $this->belongsToMany(User::class, 'assigned_employees');
    }
}
