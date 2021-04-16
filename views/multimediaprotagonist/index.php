<?php

use yii\helpers\Html;
use yii\grid\GridView;

/* @var $this yii\web\View */
/* @var $searchModel app\models\MultimediaprotagonistSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Multimedia Protagonists';
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="multimediaprotagonist-index">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Create Multimedia Protagonist', ['create'], ['class' => 'btn btn-success']) ?>
    </p>

    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'fkmultimedia:datetime',
            'fkprotagonist',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>


</div>
