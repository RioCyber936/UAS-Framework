<?php

namespace App\Http\Requests;

use App\Models\Transaction;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreTransactionRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'name' => [
                'string',
                'required',
            ],
            'address' => [
                'string',
                'required',
            ],
            'town' => [
                'string',
                'required',
            ],
            'state' => [
                'string',
                'required',
            ],
            'postal_code' => [
                'string',
                'required',
            ],
            'phone' => [
                'string',
                'required',
            ],
            'total' => [
                'integer',
                'required',
            ],
        ];
    }
}
