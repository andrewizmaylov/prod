<?php

namespace App\Models;

use App\Models\Chapter;
use App\Models\Statment;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function chapters()
    {
    	return $this->hasMany(Chapter::class);
    }

    public function statments()
    {
    	return $this->hasMany(Statment::class);
    }
}
