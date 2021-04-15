<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\MultimediaSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Multimedia';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="multimedia-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Multimedia', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'idmultimedia:datetime',
            'titulo',
            'description',
            'year',
            'file',
            //'trailer',
            //'fkcategory',
            //'fkageclassification',
            //'fktipoformat',
            //'fkaudio',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>


</div>
