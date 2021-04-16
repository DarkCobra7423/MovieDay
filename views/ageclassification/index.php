<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\AgeclassificationSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Age Classification';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="ageclassification-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Age Classification', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'idageclassification',
            'ageclassification',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>


</div>
