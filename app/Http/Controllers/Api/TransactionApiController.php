<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTransactionRequest;
use App\Http\Requests\UpdateTransactionRequest;
use App\Http\Resources\Admin\TransactionResource;
use App\Models\Product;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class TransactionApiController extends Controller
{
    public function index()
    {
        return new TransactionResource(Transaction::advancedFilter());
    }

    public function store(StoreTransactionRequest $request)
    {
        $transaction = Transaction::create($request->validated());
        return (new TransactionResource($transaction))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Transaction $transaction)
    {
        return response([
            'meta' => [
            ],
        ]);
    }

    public function show(Transaction $transaction)
    {
        return new TransactionResource($transaction->load(['users', 'products']));
    }

    public function update(UpdateTransactionRequest $request, Transaction $transaction)
    {
        $transaction->update($request->validated());
        $transaction->products()->sync($request->input('products.*.id', []));

        return (new TransactionResource($transaction))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Transaction $transaction)
    {
        return response([
            'data' => new TransactionResource($transaction->load(['users', 'products'])),
            'meta' => [
                'users'    => User::get(['id', 'name']),
                'products' => Product::get(['id', 'name']),
            ],
        ]);
    }

    public function destroy(Transaction $transaction)
    {
        $transaction->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
